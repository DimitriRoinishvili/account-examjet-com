import {Menu} from "@/types/menu";

const docsData: Menu[] = [
    {
        id: 10,
        title: "Introduction",
        path: "/",
        showTOC: false
    },
    {
        id: 20,
        title: "Getting Started",
        description: "",
        showTOC: false,
        path: "/getting-started",
        submenu: [
            {
                id: 201,
                title: "Create your first test in ExamJet",
                showTOC: true,
                path: "/getting-started/create-your-first-test-in-examjet",
            },
            {
                id: 202,
                title: "Available modules in ExamJet",
                showTOC: true,
                path: "/getting-started/available-modules-in-examjet",
            },
            {
                id: 203,
                title: "Manager module",
                showTOC: true,
                path: "/getting-started/manager-module",
            },
            {
                id: 204,
                title: "About ExamJet",
                showTOC: true,
                path: "/getting-started/about-examjet",
            }
        ],
    },
    {
        id: 30,
        title: "Account Management",
        path: "/accounts",
        showTOC: false,
        expanded: true,
        submenu: [
            {
                id: 301,
                title: "Account Defaults",
                showTOC: true,
                path: "/accounts/account-defaults",
            }
        ],
    },
    {
        id: 40,
        title: "System Requirements",
        path: "/system-requirements",
        showTOC: false,
        expanded: true,
        submenu: [
            {
                id: 401,
                title: "ExamJet System Requirements",
                showTOC: true,
                path: "/system-requirements/examjet-system-requirements",
            }
        ]
    },

    {
        id: 50,
        title: "Tester",
        showTOC: false,
        path: "/tester",
        submenu: [
            {
                id: 501,
                title: "Taking the Test",
                showTOC: false,
                path: "/tester/taking-test",
            }
        ]
    },
    {
        id: 60,
        title: "Question Banks",
        showTOC: true,
        path: "/question-banks",
        submenu: [
            {
                id: 601,
                title: "Question Banks",
                showTOC: true,
                path: "/question-banks/manage-question-banks",
            },
            {
                id: 602,
                title: "Question types in ExamJet",
                showTOC: true,
                path: "/question-banks/question-types-in-examjet",
            },
            {
                id: 603,
                title: "How to manage questions in ExamJet",
                showTOC: true,
                path: "/question-banks/how-to-manage-questions-in-examjet",
            },
            {
                id: 604,
                title: "Manage Scenarios",
                showTOC: true,
                path: "/question-banks/manage-scenarios",
            }
        ]
    },
    {
        id: 70,
        title: "Students",
        path: "/students",
        submenu: [
            {
                id: 701,
                title: "Student Groups",
                showTOC: true,
                path: "/students/student-groups",
            },
            {
                id: 702,
                title: "Students",
                showTOC: true,
                path: "/students/students",
            }
        ]
    },
    {
        id: 80,
        title: "Tests",
        showTOC: true,
        path: "/tests",
        submenu: [
            {
                id: 801,
                title: "Tests",
                showTOC: true,
                path: "/tests/manage-tests",
            },
            {
                id: 802,
                title: "Create Test",
                showTOC: true,
                path: "/tests/create-test",
            },
            {
                id: 803,
                title: "Edit Test",
                showTOC: true,
                path: "/tests/edit-test",
            },
            {
                id: 804,
                title: "Delete Test",
                showTOC: true,
                path: "/tests/delete-test",
            },
            {
                id: 805,
                title: "Test Access Codes",
                showTOC: true,
                path: "/tests/test-access-codes",
            }
        ]
    }
];

export default docsData;
