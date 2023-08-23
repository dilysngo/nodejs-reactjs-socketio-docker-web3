export declare class CoursesService {
    courses: {
        id: number;
        title: string;
        description: string;
        author: string;
        url: string;
    }[];
    getCourses(): Promise<any>;
    getCourse(courseId: any): Promise<any>;
    addCourse(course: any): Promise<any>;
    deleteCourse(courseId: any): Promise<any>;
}
