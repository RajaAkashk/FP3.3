<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body class="container p-4">

  <h1>Employee List</h1>

  <ul id="employeeList" class="row p-0"></ul>

  <script>
    const employeeList = document.querySelector('#employeeList')
    const apiUrl = 'https://employee-management-backend-student-neog-ca.replit.app/employees'

    function fetchingEmployeeList() {
      employeeList.textContent = "Loading..."

      fetch(apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          if (data) {
            employeeList.textContent = ""
            for (let i = 0; i < data.length; i++) {
              const liElement = document.createElement('li')
              liElement.className = "col-md-12 my-2 list-unstyled"
              liElement.innerHTML = `${data[i].name} - Department: ${data[i].department} - Gender: ${data[i].gender} <button class="btn btn-danger float-end" data-id ="${data[i]._id}" id="deleteBtn">Delete</button> `

              employeeList.appendChild(liElement)
            }
          }

          const deleteButtons = document.querySelectorAll('#deleteBtn')

          for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', function (event) {
              const EmployeeId = event.target.getAttribute('data-id')
              const apiDeleteUrl = `https://employee-management-backend-student-neog-ca.replit.app/employees/${EmployeeId}`
              fetch(apiDeleteUrl, {
                method: 'DELETE'
              })
                .then(function (response) {
                  return response.json()
                })
                .then(function (data) {
                  if (data) {
                    fetchingEmployeeList()
                  }
                })

            })
          }


        })
        .catch(function (error) {
          employeeList.textContent = 'Error in fetching employee list.'
        })

    }

    fetchingEmployeeList()
  </script>
</body>

</html>
