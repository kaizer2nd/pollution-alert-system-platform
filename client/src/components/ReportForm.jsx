import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CloudUpload, MapPin, ShieldAlert } from "lucide-react";
import Reveal from "./Reveal";

const ReportForm = ({ onSubmitMock }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm();
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const severity = watch("severity", 4);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = (file) => {
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
    setValue("image", file, { shouldValidate: true });
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const onSubmit = (data) => {
    onSubmitMock({
      title: "Report submitted",
      description: `Thanks ${data.name}, your report has been recorded.`
    });
    reset();
    setPreview(null);
  };

  return (
    <div className="mx-auto max-w-6xl px-4">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="section-title">Report pollution</h2>
          <p className="section-subtitle mt-3">
            Submit a report in seconds. This is a demo form with simulated submission and toast
            feedback.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass-card grid gap-6 rounded-3xl p-6 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500">Name is required.</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Pollution type
              </label>
              <select
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400"
                {...register("type", { required: true })}
              >
                <option value="">Select type</option>
                <option value="air">Air</option>
                <option value="water">Water</option>
                <option value="garbage">Garbage</option>
                <option value="industrial">Industrial</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-xs text-rose-500">Please select a type.</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Description
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400"
                placeholder="Describe the incident"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-rose-500">Description is required.</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Location
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3">
                <MapPin className="h-4 w-4 text-brand-600" />
                <input
                  className="w-full bg-transparent text-sm text-slate-800 outline-none"
                  placeholder="Area, landmark, GPS coordinates"
                  {...register("location", { required: true })}
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-xs text-rose-500">Location is required.</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Severity
              </label>
              <div className="mt-3 flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  className="w-full"
                  {...register("severity")}
                />
                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  {severity}/10
                </span>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Submit report
            </button>
          </div>

          <div className="space-y-4">
            <div
              className={`flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed px-6 py-10 text-center transition ${
                isDragging
                  ? "border-brand-500 bg-brand-50/60"
                  : "border-slate-200/80 bg-white/60"
              }`}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
            >
              <CloudUpload className="h-8 w-8 text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Drag & drop pollution image
                </p>
                <p className="text-xs text-slate-500">or click to browse from device</p>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="imageUpload"
                {...register("image", { required: true })}
                onChange={(event) => handleFile(event.target.files?.[0])}
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white"
              >
                Upload image
              </label>
              {errors.image && (
                <p className="text-xs text-rose-500">Image is required.</p>
              )}
            </div>

            <div className="glass-card rounded-3xl p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <ShieldAlert className="h-4 w-4 text-brand-600" />
                Evidence Preview
              </div>
              <div className="mt-3 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={
                    preview ||
                    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
                  }
                  alt="Preview"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </form>
      </Reveal>
    </div>
  );
};

export default ReportForm;
