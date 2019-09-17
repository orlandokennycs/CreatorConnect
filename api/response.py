class Response:
    def __init__(self, code, data, *args):
        self.code = code
        self.status = getResponseData(code)['status']
        self.message = getResponseData(code)['message']
        self.data = data
        self.errorData = args[0] if len(args)>0 else {}
    
def getResponseData(code):
    possibleCodes = {
        200: {"status": "Success", "message": "The request completed successfully"}
    }
    errObj = {"status": "Fatal Error", "message": "The code returned does not correcpond with a status! Contact an admin for help."}
    return possibleCodes.get(code, errObj)
