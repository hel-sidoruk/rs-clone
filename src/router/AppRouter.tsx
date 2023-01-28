import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Challenges, Kata, KataTraining, UserProfile } from '../pages';
import { Leaderboard } from '../pages/Leaderboard';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kata" element={<Challenges />} />
      <Route path="/kata/:id" element={<Kata />} />
      <Route path="/kata/:id" element={<Kata />} />
      <Route path="/kata/:id/train" element={<KataTraining />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/users/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}
