import {Group} from './group';
import {UserPayload} from './user-payload';

export interface CommentModel {
  id: string;
  group: Group;
  user: UserPayload;
  text: string;
}

export interface CommentResponse {
  group: Group;
  populatedComments: CommentModel[];
}
