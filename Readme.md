## Start Backend
- cd backend
- npm install
- npm run dev

## start frontend
- cd employee-management
- npm install
- npm run dev

# Base url

http://localhost:8080/v1

## Endpoints
# Get All Employees
```
GET /v1/getall
```
## Description:
Fetches a list of all employees.
## Response Example:
```{
  "employees": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "salary": 50000
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "age": 28,
      "salary": 55000
    }
  ]
}
```
# Add Employee
```POST /v1/add```
## Description:
```
Adds a new employee.
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 35,
  "salary": 60000
}
```

# Update Employee

```PUT /v1/update/:id```

## Description:
Updates an existing employee's details by their ID.
```
{
  "name": "Alice Cooper",
  "email": "alice.cooper@example.com",
  "age": 36,
  "salary": 65000
}
```
# Delete Employee
```DELETE /v1/delete/:id```
## Description:
Deletes an employee by their ID.
