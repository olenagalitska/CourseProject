import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {GroupsService} from "../../services/groups.service";
import {CoursesService} from "../../services/courses.service";
import {UsersService} from "../../services/users.service";
import {TasksService} from "../../services/tasks.service";
import {SubmittedTasksService} from "../../services/submitted-tasks.service";

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  groupId;
  group;

  courseId;
  course = {};

  students;
  tasks;

  Arr = Array;

  constructor(private route: ActivatedRoute, private location: Location,
              private groupsService: GroupsService, private coursesService: CoursesService,
              private usersService: UsersService, private tasksService: TasksService,
              private submittedTasksService: SubmittedTasksService) {
    this.students = [];
    this.tasks = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = params.group_id;
      this.courseId = params.course_id;
    });
    var tasks = [];

    this.coursesService.getCourseById(this.courseId, localStorage.getItem("currentToken")).subscribe(
      course => {
        this.course = course;
        for (var i = 0; i < course.tasks.length; i++) {
          this.tasksService.getTaskById(course.tasks[i], localStorage.getItem("currentToken")).subscribe(
            task => {
              this.tasks.push(task);
            }
          )
        }

        this.groupsService.getGroupById(this.groupId, localStorage.getItem("currentToken")).subscribe(
          group => {
            this.group = group;
            group.students.sort(function(a, b){return a._id - b._id})
            for (var i = 0; i < group.students.length; i++) {
              this.usersService.getUserById(group.students[i], localStorage.getItem("currentToken")).subscribe(
                user => {
                  user.submittedTasks = [];
                  this.students.push(user);

                  this.submittedTasksService.getAllSubmittedTasks(localStorage.getItem("currentToken")).subscribe(
                    submittedTasks => {
                      submittedTasks.forEach((submittedTask) => {
                        if (course.tasks.includes(submittedTask.task_id)) {
                          if (submittedTask.student_id == user._id) {
                            this.tasks.forEach((task) => {
                              if (task._id == submittedTask.task_id) {
                                submittedTask.task = task;
                                user.submittedTasks.push(submittedTask);
                              }
                            })
                          }
                        }
                      })
                    })

                })
            }
          })


      })

  }


  backToCourse() {
    this.location.back()
  }

}
