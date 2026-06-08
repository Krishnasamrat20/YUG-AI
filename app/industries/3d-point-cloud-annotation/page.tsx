import GlobalNav from '@/components/GlobalNav';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function PointCloudPage() {
  return (
    <main>
      <GlobalNav />
      <HeroBanner title="3D point cloud annotation" subtitle="3D segmentation, labeling and pose estimation" image="/images/img_industries.jpg" />

      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-white">3D point cloud annotation</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">
          High-quality 3D labels for lidar and depth sensors: semantic segmentation, instance labeling, bounding boxes in 3D, and pose annotations for robotics and autonomous systems.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">Capabilities</h2>
        <ul className="mt-4 list-inside list-disc text-slate-300">
          <li>Voxel and point-wise semantic labels.</li>
          <li>3D bounding boxes and tracking.</li>
          <li>Calibration-assisted labeling and sensor fusion workflows.</li>
        </ul>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Request 3D annotation</Link>
        </div>
      </section>
    </main>
  );
}
