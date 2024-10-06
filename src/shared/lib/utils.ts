
import { User } from "@/entities/user/model/types/users";

export const searchUser = (users: User[], searchTerm: string): User[] => {
  if (!searchTerm) return users;
  
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: any) => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  