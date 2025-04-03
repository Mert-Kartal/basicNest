import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [CategoryModule, PostModule, CommentModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
