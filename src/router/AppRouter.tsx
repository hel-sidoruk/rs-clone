import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { Home, KataLibrary, Kata, KataTraining, UserProfile } from '../pages';
import { KataDiscuss } from '../pages/KataDiscuss';
import { KataSolutions } from '../pages/KataSolutions';
import { Leaderboard } from '../pages/Leaderboard';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kata" element={<KataLibrary />} />
      <Route path="/kata/:id" element={<Kata />}>
        <Route path="/kata/:id/discuss" element={<KataDiscuss />} />
        <Route path="/kata/:id/solutions" element={<KataSolutions />} />
      </Route>
      <Route path="/kata/:id/train" element={<KataTraining />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/registration" element={<AuthForm />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/users/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}
