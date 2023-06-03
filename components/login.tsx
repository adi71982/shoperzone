'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { Auth } from '@supabase/auth-ui-react'

export default function Login() {
  const supabase = createClientComponentClient()

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        />
    </div>
    );
}