import {Menu} from "@/types/menu";

const menuData: Menu[] = [
    {
        id: 10,
        title: "Home",
        path: "/"
    },
    {
        id: 20,
        title: "ExamJet",
        submenu: [
            {
                id: 201,
                title: "Overview",
                path: "/examjet",
            },
            {
                id: 202,
                title: "Question Banks",
                path: "/question-banks-in-examjet"
            },
            {
                id: 203,
                title: "Student Groups",
                path: "/student-groups-in-examjet"
            },
            {
                id: 204,
                title: "Test Management",
                path: "/tests-in-examjet"
            },
            {
                id: 205,
                title: "Analytics and Reporting",
                path: "/analytics-in-examjet"
            },
            {
                id: 206,
                title: "Test students’ Knowledge",
                path: "/test-students-in-examjet"
            }
        ]
    },
    {
        id: 30,
        title: "Our Clients",
        path: "/our-clients"
    },
    {
        id: 40,
        title: "Pricing",
        path: "/pricing"
    },
    {
        id: 50,
        title: "Resources",
        submenu: [
            {
                id: 501,
                title: "Knowledge Base",
                path: "/docs"
            },
            {
                id: 502,
                title: "eLearning Blog",
                path: "/blog"
            }
        ]
    },
    {
        id: 60,
        title: "About Us",
        submenu: [
            {
                id: 601,
                title: "Company",
                path: "/company"
            },
            {
                id: 602,
                title: "Contact Us",
                path: "/contact-us"
            }
        ]
    },
    // {
    //     id: 5,
    //     title: "Pages",
    //     submenu: [
    //         {
    //             id: 51,
    //             title: "About Page",
    //             path: "/about"
    //         },
    //         {
    //             id: 52,
    //             title: "Contact Page",
    //             path: "/contact"
    //         },
    //         {
    //             id: 53,
    //             title: "Blog Grid Page",
    //             path: "/blog"
    //         },
    //         {
    //             id: 54,
    //             title: "Blog Sidebar Page",
    //             path: "/blog-sidebar"
    //         },
    //         {
    //             id: 55,
    //             title: "Blog Details Page",
    //             path: "/blog-details"
    //         },
    //         {
    //             id: 56,
    //             title: "Sign In Page",
    //             path: "/signin"
    //         },
    //         {
    //             id: 57,
    //             title: "Sign Up Page",
    //             path: "/signup"
    //         },
    //         {
    //             id: 58,
    //             title: "Error Page",
    //             path: "/error"
    //         },
    //     ],
    // },
];

export default menuData;
