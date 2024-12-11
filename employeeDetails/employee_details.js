const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'js'},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'human resources'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'budget'},
      //... More employee records can be added here
    ];

     // Function to display all employees
     function displayEmployees(){
        const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
     }

    //calculates the total salaries of every employee
    function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

    //display the employees details based on department
    function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

    //display employees details based on ID
    function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
      }

      //function to display employees by skill
      function findEmployeeBySpecialization(eSkill){
        const skill = employees.find(employee => employee.specialization === eSkill);
        if (skill){
            document.getElementById('employeesDetails').innerHTML =`<p>${skill.id}: ${skill.name}: ${skill.name} - ${skill.department} - ${skill.salary} - ${skill.specialization}</p>`;
        }
        else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this skill'; 
        }
      }