export class CreatePostDto {
  readonly slug: string;
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly tags: string;
  readonly status: boolean;
}
