import {
  SetMetadata,
  //   ExecutionContext,
} from '@nestjs/common';

export const IS_PUBLIC = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC, true);
