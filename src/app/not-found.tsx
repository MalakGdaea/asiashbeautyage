import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell">
      <section className="section-wrap">
        <div className="panel-card mx-auto max-w-2xl px-6 py-16 text-center sm:px-10">
          <p className="section-kicker">404</p>
          <h1 className="section-title">الصفحة غير موجودة</h1>
          <p className="section-copy">
            الرابط الذي أدخلته غير صحيح أو تم نقل الصفحة. يمكنك العودة إلى
            الصفحة الرئيسية للمتابعة.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-luxury">
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
