"use client";
import { newVerification } from "@/actions/new-verification";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader, ClipLoader } from "react-spinners";
const NewVerification = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }
    if (token) {
      newVerification(token).then((data) => {
        if (data.success) setSuccess(data?.success);
        if (data.error) setError(data.error);
        return;
      });
    }
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerification;
