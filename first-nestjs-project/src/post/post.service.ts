import {Injectable} from "@nestjs/common";
import {Post} from "./post.entity";
import {CreatePostDto} from "./dto/create-post.dto";
import {UpdatePostDto} from "./dto/update-post.dto";
import {PostRepository} from "./post.repository";

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {
    }

    async findAll(): Promise<Post[]> {
        return this.postRepository.find();
    }

    async findOne(id: number): Promise<Post | null> {
        return this.postRepository.findOne({where: {id}});
    }

    async create(dto: CreatePostDto): Promise<Post> {
        const post = this.postRepository.create(dto);
        return this.postRepository.save(post);
    }

    async update(id: number, dto: UpdatePostDto): Promise<Post> {
        this.postRepository.update(id, dto);
        return this.postRepository.findOne({where: {id}});
    }

    async remove(id: number): Promise<void> {
        this.postRepository.delete(id);
    }
}