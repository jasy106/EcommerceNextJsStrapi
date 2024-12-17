export abstract class ServiceBase{
    static API_URL ="https://faithful-birthday-77c52efc60.strapiapp.com/api";
    static API_TOKEN = "Beare 3b29aad55af9a126e8fdad3da594d12d1a576999017273335d80f01e4ad08d40689b99e70c4f80f389b3a2217acb81b6c1f628920e86ac8135684d674424ab6cd37414229f4415883354721a865b29c95cac3c4e84acef7fb350e3fbf8c1ecf007f4566876867960bf2f72ecd93545ef39819680aefe6106617bee6ed607818d";
    static getURL(path : string){
        return (`${this.API_URL}${path}`);
    }
}