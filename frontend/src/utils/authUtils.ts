// utils/authUtils.ts
import { useAuth } from '../hooks/useAuth';

export const useCanEdit = () => {
  const { hasRole } = useAuth();
  return hasRole('editorInChief');
};
