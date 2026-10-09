"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function InputOTPDigitsOnly() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-digits">Verification code</FieldLabel>
      <InputOTP id="otp-digits" maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Enter the 4-digit code we texted you.</FieldDescription>
    </Field>
  )
}
