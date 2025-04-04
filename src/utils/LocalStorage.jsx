// localStorage.clear()


export const employees = [
  {
    ID: "EMP001",
    PASSWORD: "1234",
    EMAIL: "emp001@example.com",
    name: "Aarav Sharma",
    tasks: [
      {
        title: "Complete Project Report",
        description: "Prepare and submit the final project report.",
        date: "2025-03-18",
        category: "Work",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Attend Meeting",
        description: "Join the Zoom meeting with the client at 3 PM.",
        date: "2025-03-19",
        category: "Meetings",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Fix Website Bug",
        description: "Resolve the critical issue on the landing page.",
        date: "2025-03-17",
        category: "Development",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 1
    }
  },
  {
    ID: "EMP002",
    PASSWORD: "1234",
    EMAIL: "emp002@example.com",
    name: "Isha Verma",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a new homepage layout in Figma.",
        date: "2025-03-20",
        category: "Design",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Team Standup",
        description: "Join the daily standup call at 10 AM.",
        date: "2025-03-18",
        category: "Meetings",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Add new features to the user guide.",
        date: "2025-03-21",
        category: "Documentation",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0
    }
  },
  {
    ID: "EMP003",
    PASSWORD: "1234",
    EMAIL: "emp003@example.com",
    name: "Ravi Patel",
    tasks: [
      {
        title: "Database Backup",
        description: "Perform a full database backup.",
        date: "2025-03-22",
        category: "Maintenance",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Check website vulnerabilities and fix issues.",
        date: "2025-03-23",
        category: "Security",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0
    }
  },
  {
    ID: "EMP004",
    PASSWORD: "1234",
    EMAIL: "emp004@example.com",
    name: "Priya Singh",
    tasks: [
      {
        title: "Write Blog Post",
        description: "Draft an article on the latest tech trends.",
        date: "2025-03-18",
        category: "Content",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize the website for search engines.",
        date: "2025-03-19",
        category: "Marketing",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Prepare and send a promotional email.",
        date: "2025-03-20",
        category: "Marketing",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 1
    }
  },
  {
    ID: "EMP005",
    PASSWORD: "1234",
    EMAIL: "emp005@example.com",
    name: "Neha Gupta",
    tasks: [
      {
        title: "Client Feedback Review",
        description: "Analyze client feedback and make necessary updates.",
        date: "2025-03-21",
        category: "Customer Service",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Prepare Sales Report",
        description: "Generate a sales report for Q1.",
        date: "2025-03-25",
        category: "Finance",
        active: false,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Code Refactoring",
        description: "Optimize and clean up legacy code.",
        date: "2025-03-22",
        category: "Development",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0
    }
  }
];

export const admin = [
  {
    ID: "ADMIN001",
    PASSWORD: "1234",
    EMAIL: "admin@example.com",
    name: "Sunil Kumar"
  }
];

  
  export const setLocalStorage=()=>{

    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const getLocalStorage=()=>{

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees,admin}
    
    
    
  }