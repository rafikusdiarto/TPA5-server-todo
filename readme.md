Register
Atrributes

username : string
password : string
email : string
token: string

Method : POST
-   Endpoint : user/all-user/register
-   Header :
        Content-Type : application/json
        Accept : application/json
-   Body :

   {
        "username" : "string",
        "password" : "string",
        "email" : "string",
        "token" : "string",
    }

-   Response :
{
    {
        "username" : "rafi",
        "password" : "rafi2507",
        "email" : "rafi@gmail.com",
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
}

# Todo

Atrributes
item: string
deskripsi: string
createdAt : timestamp
updatedAt : timestamp

Method : POST
-   Endpoint : todo/all-todo
-   Header :
        Content-Type : application/json
        Accept : application/json
-   Body :
{
    "item" : "string",
    "deskripsi" : "string",
    "createdAt" : "timestamp",
    "updatedAt" : "timestamp"
}

- Response :
{
    {
        "item" : "kuliah",
        "deskripsi" : "besok pagi kuliah",
        "createdAt" : "2022-11-13",
        "updatedAt" : "2022-11-14"
    }
}