import React from 'react';

export function slowImport(value, ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}
