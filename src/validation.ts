import { z } from 'zod';
const User = z.object({
  username: z.string(),
});