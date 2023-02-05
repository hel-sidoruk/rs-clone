import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Authorization,
  Home,
  Kata,
  KataDiscuss,
  KataLibrary,
  KataSolutions,
  KataTraining,
  Leaderboard,
  UserProfile,
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
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/users/leaderboard" element={<Leaderboard />} />
      <Route path="/login" element={<Authorization option="login" />} />
      <Route path="/registration" element={<Authorization option="registration" />} />
    </Routes>
  );
}
