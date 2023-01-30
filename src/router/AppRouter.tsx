import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  KataLibrary,
  Kata,
  KataTraining,
  UserProfile,
  Authorization,
  KataDiscuss,
  KataSolutions,
  Leaderboard,
} from '../pages';

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
      <Route path="/login" element={<Authorization />} />
      <Route path="/registration" element={<Authorization />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/users/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}
