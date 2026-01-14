import Link from "next/link";
import SocialLinks from "@/app/_components/social-links";

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "NextGen Platform",
            description: "Một công cụ giúp developers xây dựng ứng dụng nhanh hơn và hiệu quả hơn.",
            status: "Đang phát triển",
            link: "#"
        },
        {
            id: 2,
            title: "Project Alpha",
            description: "Hệ thống quản lý nội dung hiện đại với giao diện trực quan.",
            status: "Hoàn thành",
            link: "#"
        },
        {
            id: 3,
            title: "Project Beta",
            description: "Ứng dụng mobile cho việc quản lý công việc cá nhân.",
            status: "Hoàn thành",
            link: "#"
        },
        {
            id: 4,
            title: "Project Gamma",
            description: "Platform học tập trực tuyến với AI hỗ trợ cá nhân hóa.",
            status: "Đã tạm dừng",
            link: "#"
        }
    ];

    return (
        <div className="container">
            <header className="header">
                <div className="avatar">
                    <img src="/img/avatar.webp" alt="Giang Đinh" />
                </div>
                <h1>Giang Đinh</h1>
                <p className="tagline">Người Chia Sẻ Những Trải Nghiệm</p>
            </header>

            <nav className="nav">
                <Link href="/">Trang chủ</Link>
                <Link href="/posts">Bài viết</Link>
                <Link href="/contact">Liên hệ</Link>
            </nav>

            <main className="content">
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '30px',
                    background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Dự án của tôi
                </h2>

                <p style={{ marginBottom: '40px' }}>
                    Dưới đây là một số dự án mà tôi đã và đang tham gia phát triển.
                    Mỗi dự án đều mang lại những trải nghiệm và bài học quý giá trong hành trình phát triển của tôi.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="project-card"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 600 }}>
                                    <Link href={project.link}>
                                        {project.title}
                                    </Link>
                                </h3>
                                <span style={{
                                    fontSize: '13px',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    background: project.status === 'Đang phát triển'
                                        ? 'rgba(101, 123, 131, 0.15)'
                                        : project.status === 'Hoàn thành'
                                            ? 'rgba(133, 153, 0, 0.15)'
                                            : 'rgba(147, 161, 161, 0.15)',
                                    color: project.status === 'Đang phát triển'
                                        ? '#657b83'
                                        : project.status === 'Hoàn thành'
                                            ? '#859900'
                                            : '#93a1a1',
                                    fontWeight: 500
                                }}>
                                    {project.status}
                                </span>
                            </div>
                            <p style={{ color: '#93a1a1', fontSize: '15px', lineHeight: 1.7 }}>
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="highlight" style={{ marginTop: '40px' }}>
                    <p style={{ marginBottom: 0 }}>
                        💡 <strong>Bạn có ý tưởng dự án?</strong> Tôi luôn sẵn sàng lắng nghe và hợp tác.
                        Hãy <Link href="/contact">liên hệ với tôi</Link> để thảo luận thêm!
                    </p>
                </div>
            </main>

            <footer>
                <SocialLinks />
                <p className="copyright">© 2026 Giang Đinh</p>
            </footer>
        </div>
    );
}
