"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const courses_mock_1 = require("./courses.mock");
let CoursesService = exports.CoursesService = class CoursesService {
    constructor() {
        this.courses = courses_mock_1.COURSES;
    }
    getCourses() {
        return new Promise((resolve) => {
            resolve(this.courses);
        });
    }
    getCourse(courseId) {
        const id = Number(courseId);
        return new Promise((resolve) => {
            const course = this.courses.find((course) => course.id === id);
            if (!course) {
                throw new common_1.HttpException('Course does not exist', 404);
            }
            resolve(course);
        });
    }
    addCourse(course) {
        return new Promise((resolve) => {
            this.courses.push(course);
            resolve(course);
        });
    }
    deleteCourse(courseId) {
        const id = Number(courseId);
        return new Promise((resolve) => {
            const index = this.courses.findIndex((course) => course.id === id);
            if (index === -1) {
                throw new common_1.HttpException('Course does not exist', 404);
            }
            this.courses.splice(index, 1);
            resolve(this.courses);
        });
    }
};
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map