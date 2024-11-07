import TermsOfServiceDetailView from "@/views/terms/TermsView";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function TermsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const type = searchParams.type;
  if (type !== "service" && type !== "location" && type !== "privacy" && type !== "marketing") {
    throw new Error("Invalid type");
  }
  return <TermsOfServiceDetailView type={type} />;
}
