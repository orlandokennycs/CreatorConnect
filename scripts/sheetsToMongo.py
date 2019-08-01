#the following program uses the gspread library to read data from a google sheet.
# it is assumed that: 
#   a) Your google devloper console api-key json file is in the current working directory
#   b) gspread library is installed
import time
import gspread
import dns
import pymongo
import time
import datetime
import json
from pymongo import MongoClient
from oauth2client.service_account import ServiceAccountCredentials

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('creatorconnect-245321-b6a48c08ab2d.json', scope)

from time import sleep

class User:
    def __init__(self):
        self.timeStamp = ""
        self.firstName = ""
        self.lastName = ""
        self.fsuId = ""
        self.email = ""
        self.graduationDate = ""
        self.skills = []
        self.duplicate = bool
    
    def printUserData(self):
        print(self.timeStamp)
        print(self.firstName)
        print(self.lastName)
        print(self.fsuId)
        print(self.email)
        print(self.graduationDate)
        for index in range(len(self.skills)):
            print(self.skills[index])
        print("\n")
    
    def objToDict(self):
        objDict = {"name": self.firstName + " " + self.lastName, "fsu_id": self.fsuId, "email": self.email, "grad_date": self.graduationDate, "skills": self.skills, "date_created": self.timeStamp}
        return objDict
    
    def checkDup(self, collection):
        for document in collection.find(self.objToDict()):
            return True


        
def parsingMethod(s):
    dataAttr = []
    temp = s
    delimiter = ","
    countGoal = temp.count(delimiter)
    if countGoal == 0:
        dataAttr.append(temp)
    else:
        for i in range(0, countGoal):                                                #This loop takes a substring, stores it in an array, and then deletes it from a larger string... - 1 is in the argument for when the delimiter can no longer be found (final obj)
            dataAttr.append(temp[:temp.find(delimiter)])
            temp = temp.replace(temp[:temp.find(delimiter) + 1], "")
            temp = temp.strip()
        if i == (countGoal - 1):
            dataAttr.append(temp)
    return dataAttr


def main():
    client = pymongo.MongoClient("mongodb://oak18b:panama@cluster0-shard-00-00-q86na.mongodb.net:27017,cluster0-shard-00-01-q86na.mongodb.net:27017,cluster0-shard-00-02-q86na.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority")
    db = client["CreatorConnect"]
    collection = db["users"]
    
    usersArray = []
    gc = gspread.authorize(credentials)
    formResponses = gc.open_by_key('1vlE9QDXZRa6dyvl9NJ262Zzxf4d6IDQcoBaWfcBHOFY')  #opens the spreadsheet
    form = formResponses.get_worksheet(0)                                           #opens the FIRST worksheet INSIDE the spreadsheet (assumed to be the 'linked' form)

    totalUsers = (form.row_count - 1) #One is subtracted from the total number of rows to account for the total USERS on the spreadsheet.
    totalColumns = form.col_count
    
    for x in range(0, totalUsers):
        
        usersArray.append(User())
        usersArray[x].timeStamp = form.cell(x + 2, 1).value         #(x + 2) accounts for ('0') row AND the ('1') [it is a label on the sheet.] (y + 1) accounts for  ('0') row
        usersArray[x].firstName = form.cell(x + 2, 2).value
        usersArray[x].lastName = form.cell(x + 2, 3).value
        possibleId = (form.cell(x + 2, 4).value).lower()
        if possibleId.find("@my.fsu.edu") != -1:
            usersArray[x].email = possibleId
            usersArray[x].fsuId = possibleId.replace("@my.fsu.edu", "")
        else:
            usersArray[x].email = possibleId
        usersArray[x].graduationDate = form.cell(x + 2, 5).value
        unorgSkills = form.cell(x + 2, 6).value
        usersArray[x].skills = parsingMethod(unorgSkills)
        time.sleep(5)



    #The following block of code searches the database to see if the user already exists. This stops the script from uploading the same users as new users everytime it is run.
    dcount = 0 
    for x in range(0, totalUsers):
        if(usersArray[x].checkDup(collection) == True):
            usersArray[x].duplicate = True
            dcount += 1
        else:
            usersArray[x].duplicate = False

    newUsersArray = []
    newUsers = 0

    for x in range(0, totalUsers):
        if(usersArray[x].duplicate == False):
            newUsersArray.append(usersArray[x])
            newUsers += 1
            
    upUsers = 0
    for x in range(0, newUsers):
        query = {"name": newUsersArray[x].firstName + " " + newUsersArray[x].lastName}
        #ADD TIMESTAMP FEATURE
        for doc in collection.find(query):
            objTimestamp = time.strptime(newUsersArray[x].timeStamp, '%m/%d/%Y %H:%M:%S')
            dbDict = dict
            dbTimeStr = ""
            for document in collection.find(query):
                dbDict = dict(document)
                dbTimeStr = dbDict['date_created']
            dbTimestamp = time.strptime(dbTimeStr, '%m/%d/%Y %H:%M:%S')
            if(objTimestamp >= dbTimestamp):
                #object is newer than db and will be updated
                collection.replace_one(query, newUsersArray[x].objToDict())
                upUsers += 1
        if upUsers == 0:
            x = collection.insert_one(newUsersArray[x].objToDict())

    print("Congratulations, the new users have been uploaded!")

if __name__ == '__main__':
    main()
