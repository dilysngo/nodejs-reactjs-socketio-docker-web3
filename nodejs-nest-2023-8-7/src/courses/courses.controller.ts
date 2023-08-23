import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.courseService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
    const course = await this.courseService.getCourse(courseId);
    return course;
  }

  @Post()
  async addCourse(@Body() body: CreateCourseDto) {
    const course = await this.courseService.addCourse(body);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.courseService.deleteCourse(query.courseId);
    return courses;
  }
}
