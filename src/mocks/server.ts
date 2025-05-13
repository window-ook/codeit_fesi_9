import { setupServer } from "msw/node";
import { usersHandlers } from "@/mocks/handlers/users";
import { postsHandlers } from "@/mocks/handlers/posts";

// MSW 서버를 설정합니다.
export const server = setupServer(...usersHandlers, ...postsHandlers);