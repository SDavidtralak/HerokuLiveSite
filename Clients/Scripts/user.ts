namespace core{

    export class User
    {
        private m_displayName: string;
        public get DisplayName(): string {
            return this.m_displayName;
        }
        public set DisplayName(value: string) {
            this.m_displayName = value;
        }
        private m_emailAddress: string;
        public get EmailAddress(): string {
            return this.m_emailAddress;
        }
        public set EmailAddress(value: string) {
            this.m_emailAddress = value;
        }
        private m_username: string;
        public get Username(): string {
            return this.m_username;
        }
        public set Username(value: string) {
            this.m_username = value;
        }
        private m_password: string;
        public get Password(): string {
            return this.m_password;
        }
        public set Password(value: string) {
            this.m_password = value;
        }


        // constructor
        constructor(displayName = "", emailAddress= "", username = "", password = "")
        {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        // overriden functions
        toString():string
        {
            return `Display Name  : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}`;
        }

        // utility functions
        //todo change return type
        toJSON()
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }
        //todo: replace :any later
        fromJSON(data:any)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize():string|null 
        {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "") 
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            console.error("One or more properties of the User Object are missing or empty");
            return null;
        }

        deserialize(data:string):void 
        {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }



}