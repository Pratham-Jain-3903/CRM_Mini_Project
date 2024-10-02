<div align="center">
    <a href="https://www.idurarapp.com/">
        <img src="https://avatars.githubusercontent.com/u/50052356?s=200&v=4" width="128px" />
    </a>
    <h1>GenAI-Powered Credit Access Platform for MSMEs</h1>
    <p align="center">
        <p>Revolutionizing Credit Access for Underserved MSMEs</p>
    </p>

 
</div>

## Project Overview

The **GenAI-Powered Credit Access Platform** aims to transform the landscape of credit access for underserved Micro, Small, and Medium Enterprises (MSMEs). By seamlessly connecting MSMEs with diverse financing options from lenders, investors, and government programs, this platform empowers businesses with tools to optimize financial management and enhance creditworthiness.

## Project Foundation

This solution is built on top of the existing open-source ERP community called **IDURAR**, which I have contributed to in the past. Leveraging the robust features and community support of IDURAR, this GenAI-powered platform enhances credit access for underserved MSMEs, driving financial inclusion and economic growth in previously overlooked markets.

link to my opensource community :)  https://github.com/idurar/idurar-erp-crm
---

## Key Features

- **AI-Driven Financial Assessment:** Leverage advanced AI algorithms to evaluate creditworthiness based on cash flow and historical data.
  
- **Seamless Integration with OCEN:** Ensure efficient data exchange between MSMEs and financial institutions for streamlined loan processing.
  
- **Diverse Financing Options:** Connect users with a variety of funding sources, including traditional lenders, investors, and government schemes.

- **User-Friendly Interface:** Create an intuitive platform that promotes financial literacy, making it easier for MSMEs to understand their financing options.

- **Empowerment Tools:** Provide tools and resources for financial management, helping MSMEs improve their credit profiles.

---

![GenAI-Powered Credit Access Platform](https://user-images.githubusercontent.com/50052356/141647096-dcb66696-6103-4850-ae21-9fc97a412252.png)

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/Pratham-Jain-3903/GenAI_Credit_Access_Platform.git
```
```bash
cd GenAI_Credit_Access_Platform
```
### Step 2: Create Your MongoDB Account and Database/Cluster
Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.
Create a new database or cluster by following the instructions provided in the MongoDB documentation. Note down the "Connect to your application URI" for later use. Remember to change <password> with your own password.
Add your current IP address to the MongoDB database's IP whitelist to allow connections.

### Step 3: Create the Environment File
Create a file named .variables.env in the root directory.
Copy all variables from tmp.variables.env.
Paste the copied variables inside .variables.env to store environment variables for the project.

### Step 4: Update MongoDB URI
In the .variables.env file, update:

DATABASE="your-mongodb-uri"

with your actual MongoDB URI.

### Step 5: Install Backend Dependencies
Navigate to the project root directory and run:
```bash
npm install
```
### Step 6: Run Setup Script
Execute the following command:
```bash
node setup/setup.js
```

### Step 7: Run the Backend Server
Start the backend server:
```bash
npm run dev
```
### Step 8: Install Frontend Dependencies
Open a new terminal window and run:
```bash
cd frontend
npm install
```
### Step 9: Run the Frontend Server
Start the frontend server:
```bash
npm run start
```

License
MIT/Massachusetts Institute of Technology (here LICENSE)

By contributing to this project, you agree that your contributions will be licensed under the MIT License.
