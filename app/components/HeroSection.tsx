import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="align-center flex my-auto w-full flex-col justify-center rounded-sm gap-10 p-2 text-stone-950 bg-blend-saturation">
      <div className="align-center flex w-full flex-col items-start gap-6 lg:gap-8 xl:gap-8 lg:ms-20 lg:w-2/3">
        <h1 className=" w-full lg:text-start text-xl font-bold lg:w-2/3 md:text-4xl md:w-full lg:text-5xl text-center">
          Supercharge Your Freelance Career with <span className=" underline decoration-brandPrimary decoration-solid text-stone-950">SkillBoost.</span>
        </h1>
        <h2 className="text-xl font-semibold text-brandSecondary xl:text-2xl text-start mx-2 lg:mx-0">
          Discover essential skills and experiences for your next job.
        </h2>
        <p className="font-medium text-brandSecondary text-md text-start lg:w-2/3 mx-2 lg:mx-0">
          Paste a job description and get tailored skill suggestions for freelancers. Our
          algorithm improves your CVs impact, highlighting key skills and
          experiences for freelancing. SkillBoost generates a winning motivation letter based on your CV and job
          description. 
        </p>
        <p className="font-medium text-brandSecondary text-md text-start lg:w-2/3 mx-2 lg:mx-0">
          Login or create a free account to boost your freelance career.
        </p>
      </div>
      <div className="align-center flex w-full justify-center lg:justify-start gap-2 lg:ms-20 lg:w-2/3">
        <Link
          href="/login"
          className="btn text-brandPrimary bg-white hover:text-white hover:bg-brandPrimary border-brandPrimary"
          type="submit"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="btn bg-brandPrimary text-white hover:bg-brandSecondary"
          type="submit"
        >
          Create your Free Account!
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
