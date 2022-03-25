namespace core {

    export class Contact 
    {
        //private instance members
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;
        


        //getters and setters
        get FullName(): string
        {
            return this.m_fullName;
        }
        set FullName(full_name:string)
        {
            this.m_fullName = full_name;
        }
        public getContactNumber(): string {
            return this.m_contactNumber;
        }
        public set ContactNumber(value: string) {
            this.m_contactNumber = value;
        }

        public get EmailAddress(): string {
            return this.m_emailAddress;
        }
        public set EmailAddress(value: string) {
            this.m_emailAddress = value;
        }

        // constructor
        constructor(fullName: string = "", contactNumber: string = "", emailAddress: string = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
        // public methods
        /**
         *this method allows for data to be transfered around
         *
         * @return {(string | null)}
         * @memberof Contact
         */
        serialize(): string | null 
        {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            console.error("One or more properties of the Contact Object are missing or empty");
            return null;
        }
        /**
         * this method takes string to be used as an object
         *
         * @param {string} data
         * @returns {null}
         * @memberof Contact
         */
        deserialize(data: string): void 
        {
            let propertyArray: string[] = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
        // overridden methods
        /**
         * this method overrides the a tostring method to place the object in the console
         *
         * @return  {string}
         * @memberof Contact
         */
        toString(): string 
        {
            return `Full Name     : ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
        }
    }

}