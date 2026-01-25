"use client";

import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle, Clock, Download, MapPin, PlayCircle, Users, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function CrowPoseWorkshopPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 font-sans text-slate-900">
            {/* --- HERO SECTION --- */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-32 text-white sm:py-40 lg:px-8">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

                {/* Hero Background Image Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/img/workshop/workshop-arm-balance-1.webp" alt="Crow Pose Workshop" fill className="object-cover" />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <div className="flex justify-center gap-4 text-sm font-semibold uppercase tracking-widest text-indigo-300/90 flex-wrap">
                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <Calendar className="h-4 w-4" /> [Ngày - Tháng - Năm]
                        </span>
                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <MapPin className="h-4 w-4" /> [Địa điểm Studio]
                        </span>
                    </div>

                    <h1 className="mt-12 text-6xl font-black tracking-tight sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white animate-gradient">
                        Bay cùng Quạ 🦅
                    </h1>
                    <p className="mt-4 text-2xl font-semibold text-indigo-300">
                        Chinh phục Crow Pose (Kakasana)
                    </p>

                    <p className="mt-8 text-xl leading-relaxed text-slate-200 max-w-3xl mx-auto">
                        Vượt qua nỗi sợ ngã, nắm vững kỹ thuật thăng bằng tay
                        <br className="hidden sm:inline" /> và khám phá sức mạnh nội tại trong <span className="font-bold text-indigo-300">90 phút</span>.
                    </p>

                    <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
                        <a
                            href="#register"
                            className="group relative rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Đăng ký ngay <Sparkles className="h-5 w-5" />
                            </span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href="#curriculum"
                            className="group text-base font-semibold leading-6 text-white hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2"
                        >
                            Xem lộ trình
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </section>

            {/* --- PROBLEM & SOLUTION --- */}
            <section className="py-32 sm:py-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-28 items-center">
                        <div className="group">
                            <div className="inline-block mb-4 text-4xl">😰</div>
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                                Bạn đã sẵn sàng để "Cất cánh"?
                            </h2>
                            <p className="mt-6 text-xl leading-relaxed text-slate-600">
                                Crow Pose (Kakasana) không chỉ là về sức mạnh tay vai, mà là nghệ thuật của sự thăng bằng và tin tưởng bản thân.
                                Nếu bạn vẫn luôn sợ "ngã mặt xuống sàn" mỗi khi thử tư thế này, workshop này chính là nơi dành cho bạn!
                            </p>
                            <ul className="mt-10 space-y-5 text-lg text-slate-700">
                                <li className="flex gap-4 items-center p-4 rounded-xl bg-red-50 border border-red-100 transition-all duration-300 hover:shadow-md hover:border-red-200">
                                    <span className="text-2xl flex-shrink-0">❌</span>
                                    <span>Sợ "ngã sấp mặt" (Face-plant) xuống sàn</span>
                                </li>
                                <li className="flex gap-4 items-center p-4 rounded-xl bg-red-50 border border-red-100 transition-all duration-300 hover:shadow-md hover:border-red-200">
                                    <span className="text-2xl flex-shrink-0">❌</span>
                                    <span>Đau cổ tay chỉ sau vài phút tập luyện</span>
                                </li>
                                <li className="flex gap-4 items-center p-4 rounded-xl bg-red-50 border border-red-100 transition-all duration-300 hover:shadow-md hover:border-red-200">
                                    <span className="text-2xl flex-shrink-0">❌</span>
                                    <span>Cảm thấy người nặng nề, không thể nhấc chân lên nổi</span>
                                </li>
                            </ul>
                        </div>

                        <div className="group relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
                            <div className="relative rounded-3xl bg-white p-8 border border-slate-100 shadow-xl overflow-hidden">
                                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/img/workshop/workshop-arm-balance-2.webp"
                                        alt="Crow Pose Technique"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="inline-block mb-4 text-4xl">✨</div>
                                <h2 className="text-3xl font-black tracking-tight text-slate-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Bí mật: Trust & Balance
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                                    Crow Pose không chỉ đòi hỏi sức mạnh. Đó là nghệ thuật của việc dồn trọng tâm và tin tưởng vào chính đôi tay mình.
                                </p>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-indigo-600 font-bold text-lg flex-shrink-0 mt-0.5">1️⃣</span>
                                        <div className="flex-1">
                                            <p className="text-slate-700"><strong>Spider Fingers:</strong> Bám chặt các đầu ngón tay xuống sàn</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-indigo-600 font-bold text-lg flex-shrink-0 mt-0.5">2️⃣</span>
                                        <div className="flex-1">
                                            <p className="text-slate-700"><strong>Protraction:</strong> Đẩy đầy lưng trên (scapula)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-indigo-600 font-bold text-lg flex-shrink-0 mt-0.5">3️⃣</span>
                                        <div className="flex-1">
                                            <p className="text-slate-700"><strong>Weight Shift:</strong> Chiến thắng nỗi sợ đổ người về trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CURRICULUM --- */}
            <section id="curriculum" className="relative bg-white py-32 sm:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-block mb-4 text-5xl">🚀</div>
                        <h2 className="text-lg font-bold leading-8 tracking-widest text-indigo-600 uppercase">Lộ trình 90 phút</h2>
                        <p className="mt-4 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                            Từ người mới đến <br className="sm:hidden" />
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">"Master of Crow"</span>
                        </p>
                    </div>

                    {/* Timeline Schedule */}
                    <div className="mx-auto mt-20 max-w-4xl">
                        <div className="space-y-6">
                            {[
                                { time: "00:00 - 00:10", emoji: "👋", title: "Opening", subtitle: "Check-in & Theory", desc: "Kết nối, hiểu 'Tại sao tập?' và giải phẫu cơ bản của Crow Pose", color: "from-blue-500 to-indigo-500" },
                                { time: "00:10 - 00:35", emoji: "🔥", title: "Warm-up", subtitle: "Wrist & Core Flow", desc: "Kích hoạt cổ tay, vai, bụng. Wrist Health + Shoulder Activation + Core Power", color: "from-orange-500 to-red-500" },
                                { time: "00:35 - 00:55", emoji: "💪", title: "Drills", subtitle: "Technical Prep", desc: "3 Drills: Fearless Lean, Block Assist, The Connection - Xây dựng muscle memory", color: "from-green-500 to-emerald-500" },
                                { time: "00:55 - 01:20", emoji: "🦅", title: "Peak Pose", subtitle: "Crow Pose Lab", desc: "Thực hành 3 Levels: Baby Crow → Classic Crow → Full Flight với spotting an toàn", color: "from-purple-500 to-pink-500" },
                                { time: "01:20 - 01:30", emoji: "🧘", title: "Closing", subtitle: "Cool down & Q&A", desc: "Wrist Therapy, Spinal Twist, Circle Share - Thư giãn & Tổng kết", color: "from-slate-500 to-slate-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative flex gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-200">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                    <div className="relative flex flex-col items-center flex-shrink-0 w-20">
                                        <div className="text-3xl mb-2">{item.emoji}</div>
                                        <div className="text-xs font-bold text-indigo-600 text-center leading-tight">{item.time}</div>
                                    </div>
                                    <div className="relative flex-1 min-w-0">
                                        <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                                        <p className="text-sm font-semibold text-indigo-600 mt-1">{item.subtitle}</p>
                                        <p className="mt-3 text-base text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mx-auto mt-24 max-w-5xl">
                        <h3 className="text-3xl font-black text-center text-slate-900 mb-12">Bạn sẽ học được gì?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: "🌳", title: "Foundation", desc: "Bàn tay là rễ cây - Kỹ thuật đặt tay và phân bổ trọng lượng đúng cách" },
                                { icon: "🦐", title: "Protraction", desc: "Lưng tôm càng - Kích hoạt xương bả vai (scapula) để tạo nền tảng vững chắc" },
                                { icon: "⚖️", title: "Weight Shifting", desc: "Nghệ thuật dồn trọng tâm - Chìa khóa của mọi arm balance" },
                                { icon: "🛡️", title: "Safety Protocol", desc: "Kỹ thuật ngã an toàn - Vượt qua nỗi sợ 'face-plant'" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-6 rounded-xl bg-indigo-50/50 border border-indigo-100">
                                    <span className="text-4xl flex-shrink-0 mt-1">{item.icon}</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                                        <p className="mt-2 text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WORKSHOP DETAILS & LOGISTICS --- */}
            <section className="bg-gradient-to-br from-slate-50 to-indigo-50/30 py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Instructor */}
                        <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200">
                            <div className="text-center">
                                <div className="mx-auto relative w-48 h-48 mb-6 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        <Image src="/img/workshop/workshop-arm-balance-3.webp" alt="Instructor" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="inline-block mb-3 text-3xl">🧘‍♀️</div>
                                <h2 className="text-3xl font-black tracking-tight text-slate-900">Người hướng dẫn</h2>
                                <p className="mt-4 text-lg text-slate-600">
                                    <span className="font-bold text-indigo-600">[Tên Giáo Viên]</span>
                                </p>
                                <p className="mt-2 text-base text-slate-600">
                                    Kinh nghiệm [X] năm giảng dạy Yoga, chuyên sâu về Arm Balance
                                </p>
                                <div className="mt-6 p-4 bg-indigo-50/50 rounded-xl inline-block border border-indigo-100">
                                    <p className="text-base font-medium text-indigo-900 italic">"An toàn - Vững chãi - Vui vẻ"</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Details & What to Bring */}
                        <div className="space-y-8">
                            {/* Workshop Details */}
                            <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200">
                                <h3 className="text-2xl font-black text-slate-900 mb-6">Thông tin Workshop</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-slate-900">Thời lượng</p>
                                            <p className="text-slate-600">90 phút</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-slate-900">Số lượng</p>
                                            <p className="text-slate-600">Giới hạn 7-10 người (Small group focus)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-slate-900">Địa điểm</p>
                                            <p className="text-slate-600">[Tên Studio/Địa chỉ]</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Sparkles className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-slate-900">Học phí</p>
                                            <p className="text-slate-600">[Giá vé]</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Music className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-slate-900">Âm nhạc</p>
                                            <p className="text-slate-600">Handpan, Hang Drum (Malte Marten)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What to Bring */}
                            <div className="rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-600 p-8 shadow-2xl text-white">
                                <h3 className="text-2xl font-black mb-6">Chuẩn bị gì?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <span>1 Thảm tập yoga</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <span>2 Block (Gạch yoga) - Rất quan trọng!</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <span>1 Khăn mặt (để dưới trán nếu sợ ngã)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                        <span>Nước uống</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                                    <p className="text-sm italic">💡 Không cần kinh nghiệm Arm Balance trước đó. Phù hợp cho cả beginners!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA REGISTER --- */}
            <section id="register" className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiA0NGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-block mb-6 text-6xl animate-bounce">🎯</div>
                        <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                            Sẵn sàng để cất cánh?
                        </h2>
                        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-indigo-100">
                            Đừng để nỗi sợ ngăn cản bạn khám phá sức mạnh tiềm ẩn của cơ thể.
                            <br />90 phút tập trung hoàn toàn vào kỹ thuật, được chỉnh sửa từng chút một.
                        </p>
                        <div className="mt-12 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="group relative rounded-full bg-white px-12 py-5 text-lg font-black text-indigo-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden"
                            >
                                <span className="relative z-10">Đăng ký ngay 🚀</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-indigo-200">
                            Hẹn gặp bạn trên thảm tập! 🧘‍♀️
                        </p>
                    </div>
                </div>
            </section>

            {/* --- POST-WORKSHOP RESOURCES --- */}
            <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-32 sm:py-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center lg:mx-0">
                        <div className="inline-block mb-6 text-5xl">🎉</div>
                        <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">Chúc mừng bạn đã "cất cánh"!</h2>
                        <p className="mt-6 text-xl leading-8 text-slate-300">
                            Tài liệu ôn tập để bạn tiếp tục thực hành tại nhà
                        </p>
                    </div>

                    <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {[
                            { icon: Download, emoji: "📄", title: "Crow Pose Cheat Sheet", desc: "Tóm tắt kỹ thuật & Alignment chuẩn (PDF)", link: "Tải xuống PDF", color: "from-blue-500 to-indigo-500" },
                            { icon: PlayCircle, emoji: "🎥", title: "Home Practice Drills", desc: "3 bài tập bổ trợ Core & Cổ tay (15 phút/ngày)", link: "Xem video", color: "from-purple-500 to-pink-500" },
                            { icon: Music, emoji: "🎵", title: "Playlist Handpan", desc: "Malte Marten mix - Âm nhạc tập luyện", link: "Nghe ngay", color: "from-green-500 to-emerald-500" }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative flex gap-4 items-start rounded-3xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20 hover:scale-105">
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <div className="relative flex-shrink-0 text-4xl mt-1">{item.emoji}</div>
                                <div className="relative flex-1 text-base leading-7">
                                    <h3 className="font-black text-white text-xl mb-2">{item.title}</h3>
                                    <p className="text-slate-300">{item.desc}</p>
                                    <p className="mt-4">
                                        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                                            {item.link} <ArrowRight className="h-4 w-4 transition-all duration-300" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-slate-300">
                            Đừng quên tag chúng mình vào story tập luyện nhé! 📸
                        </p>
                        <p className="mt-2 text-sm text-indigo-400">
                            #YogaWorkshop #CrowPose #ArmBalance #BayCùngQuạ
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    );
}
