export default function MapSection() {
  return (
    <section className="relative bg-[#f8f6f1] py-0">
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <iframe
          title="Rawal International Location"
          src="https://www.google.com/maps?q=House+No.249,+Satluj+Block,+Allama+Iqbal+Town,+Lahore,+Punjab,+Pakistan&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(20%) contrast(1.05)',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}