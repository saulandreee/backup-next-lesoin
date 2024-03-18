import BookingForm from "@/components/BookingForm";
import { revalidatePath } from "next/cache";

const onSubmitForm = async (values) => {
  "use server";
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(values);
    return { success: true };
    // revalidatePath("/online-booking");
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

export default async function Booking() {
  return (
    <main>
      <section className="grid lg:grid-cols-2 gap-8 py-[100px] lg:py-[150px]">
        <div className="grid gap-4 lg:grid-cols-2 mt-10">
          {/* <Image src='/' */}
          <div className="aspect-square shadow border rounded"></div>
          <div className="aspect-square shadow border rounded"></div>
          <div className="aspect-square shadow border rounded"></div>
          <div className="aspect-square shadow border rounded"></div>
        </div>
        <div>
          <h2 className="font-karla uppercase tracking-[3px] text-base-cream text-center">Welcome to le soin clinic</h2>
          <h1 className="text-[32px] font-marcellus text-base-dark text-center mb-12">Reservation Now</h1>
          <BookingForm onSubmit={onSubmitForm} />
        </div>
      </section>
    </main>
  );
}
