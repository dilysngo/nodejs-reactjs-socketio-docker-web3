import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
export declare class CoursesController {
    private courseService;
    constructor(courseService: CoursesService);
    getCourses(): Promise<any>;
    getCourse(courseId: any): Promise<any>;
    addCourse(body: CreateCourseDto): Promise<any>;
    deleteCourse(query: any): Promise<any>;
}
