import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Profile from './Profile';
import './SearchBar.css';
const inputSchema = z.object({
  name: z.string().min(1, 'enter atleast one character').max(50, 'too long'),
});
export default function SearchBar() {
  const [searchedFor, setSearchedFor] = useState('');
  // Automatically infers the output type from the schema
  const [showRepos, setShowRepos] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(inputSchema),
    // zodResolver expected an object schema
  });
  const onSubmit = async (data) => {
    console.log(data.name);
    setSearchedFor(data.name);
    setShowRepos(false);
  };
  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <label>search the github user</label>
        <input {...register('name')} placeholder="Enter GitHub username" />
        <button>Search</button>
      </form>
      {errors.name && <span className="search-error">{errors.name.message}</span>}
      {isSubmitSuccessful ? (
        <Profile search={searchedFor} showRepos={showRepos} handleShowing={setShowRepos} />
      ) : (
        <p className="search-message">Enter a username to search</p>
      )}
    </div>
  );
}
