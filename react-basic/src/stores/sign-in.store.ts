import { create } from "zustand";
//! 객체의 타입은 인터페이스로 정해주는 것이 좋다
interface SignInStore {
    email: string;
    password: string;
    setEmail:(email:string) => void;
    setPassword:(password:string) => void;
}

const useStore = create<SignInStore>((set) => ({ //! SignInStore <제네릭>으로 타입 지정
    email: '',
    password: '',
    setEmail: (email) => set((state) => ({ ...state, email })),  //! ...state -> state를 분해해서 넣을수있음
    setPassword: (password) => set ((state) => ({ ...state, password })), //! { } -> 객체를 만드는 것 
}));

// state -> { email, password, setEmail }
// { ...state } -> { email, password, setEmail }
// { ...state, email:email } -> { email:'email', password, setEmail }
// { ...state, password:password } -> { email, password:password, setEmail }

export default useStore;