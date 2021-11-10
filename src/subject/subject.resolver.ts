import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { SubjectService } from './subject.service';
import { Subject } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private readonly subjectService: SubjectService) {}

  @Mutation(() => Subject)
  createSubject(@Args('CreateSubjectDto') createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Query(() => [Subject], { name: 'subject' })
  findAll() {
    return this.subjectService.findAll();
  }

  @Query(() => Subject, { name: 'findSubject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.findOne(id);
  }

  @ResolveField(returns => [Teacher])
  async teacher(@Parent() subject: Subject) {
    const result = await this.subjectService.findOne(subject.id);
    return result.teachers;
  }

  @Mutation(() => Subject)
  updateSubject(@Args('updateSubjectDto') updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(updateSubjectDto.id, updateSubjectDto);
  }

  @Mutation(() => Subject)
  removeSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.remove(id);
  }
}
