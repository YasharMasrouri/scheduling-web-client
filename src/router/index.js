import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminPage from "../components/Admin/AdminPage";
import AdminHome from "../components/Admin/AdminHome";
import EditProfile from "../components/Common/EditProfile";
import AdminData from "../components/Admin/AdminData";
import AdminStudents from "../components/Admin/AdminStudents";
import AdminMasters from "../components/Admin/AdminMasters";
import MAAnnouncements from "../components/Common/MAAnnouncements";
import MasterPage from "../components/Master/MasterPage";
// import MasterHome from "../components/Master/MasterHome";
import MasterAdaptSchedule from "../components/Master/MasterAdaptSchedule";
import MasterSelected from "../components/Master/MasterSelected";
import StudentPage from "../components/Student/StudentPage";
// import StudentHome from "../components/Student/StudentHome";
import StudentAnnouncements from "../components/Student/StudentAnnouncements";
import StudentCourseSelect from "../components/Student/StudentCourseSelect";
import StudentSelected from "../components/Student/StudentSelected";
import LoginPage from "../components/LogIn/LoginPage";

Vue.use(VueRouter)

const routes = [
  {path: "/" , redirect : "/logIn"},
  {path: "/LogIn" , component: LoginPage},
  {path: "/Admin" , component: AdminPage , children:[
      {path: "" , redirect : "/Admin/Home"},
      {path: "/Admin/Home" , component: AdminHome},
      {path: "/Admin/Data" , component: AdminData},
      {path: "/Admin/Students" , component: AdminStudents},
      {path: "/Admin/Masters" , component: AdminMasters},
      {path: "/Admin/Announcements" , component: MAAnnouncements},
      {path: "/Admin/Edit" , component: EditProfile}
    ]},
    {path: "/Master" , component: MasterPage , children:[
            {path: "" , redirect : "/Master/Home"},
            {path: "/Master/Home" , component: AdminHome},
            {path: "/Master/Announcements" , component: MAAnnouncements},
            {path: "/Master/AdaptSchedule" , component: MasterAdaptSchedule},
            {path: "/Master/SelectedSchedule" , component: MasterSelected},
            {path: "/Master/Edit" , component: EditProfile}
        ]},
    {path: "/Student" , component: StudentPage , children: [
            {path: "" , redirect : "/Student/Home"},
            {path: "/Student/Home" , component: AdminHome},
            {path: "/Student/Announcements" , component: StudentAnnouncements},
            {path: "/Student/Courses" , component: StudentCourseSelect},
            {path: "/Student/SelectedCourses" , component: StudentSelected},
            {path: "/Student/Edit" , component: EditProfile}
        ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
    linkActiveClass: "list-item-active"
})

export default router
