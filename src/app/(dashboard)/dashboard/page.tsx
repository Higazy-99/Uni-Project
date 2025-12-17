"use client";

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import StatCard from '@/components/common/StatCard';
import Card from '@/components/common/Card';
import { toast } from 'sonner';

export default function DashboardPage() {
    const handleAdvisorAction = (action: string) => {
        toast.success(`تم ${action} بنجاح`, {
            description: `سيتم التواصل معك من قبل المرشد الأكاديمي قريباً.`
        });
    };

    const handleNotificationClick = (title: string) => {
        toast('تفاصيل التنبيه', {
            description: title,
            action: {
                label: 'إغلاق',
                onClick: () => console.log('Notification closed'),
            },
        });
    };

    return (
        <>
            <PageHeader
                title="لوحة المعلومات"
                description="نظرة عامة على أدائك الأكاديمي وجدولك اليومي."
                breadcrumbs={[{ label: 'الرئيسية' }, { label: 'لوحة المعلومات' }]}
                actions={
                    <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-accent">school</span>
                        <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                                الفصل الدراسي
                            </p>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                                الثاني 2024-2025
                            </p>
                        </div>
                    </div>
                }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <StatCard
                    title="المعدل التراكمي"
                    value="3.85"
                    icon="school"
                    color="primary"
                    trend={{
                        value: "ممتاز",
                        label: "مرتبة الشرف",
                        icon: "trending_up"
                    }}
                />
                <StatCard
                    title="الساعات المكتسبة"
                    value="98"
                    subValue="/ 132"
                    icon="hourglass_bottom"
                    color="green"
                />
                <StatCard
                    title="المواد المسجلة"
                    value="4"
                    subValue="مواد"
                    icon="library_books"
                    color="purple"
                    trend={{
                        value: "11",
                        label: "ساعة معتمدة",
                    }}
                />
                <StatCard
                    title="الحدث القادم"
                    value="اختبار نصفي"
                    icon="event"
                    color="amber"
                    trend={{
                        value: "بعد 3 أيام",
                        label: "نظم تشغيل",
                        icon: "timer"
                    }}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card noPadding className="overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary dark:text-primary-light">
                                    calendar_today
                                </span>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                                    جدول اليوم
                                </h3>
                            </div>
                            <span className="text-xs font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">
                                الأحد، 15 أكتوبر
                            </span>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                <div className="flex flex-col items-center justify-center min-w-[4rem] text-center">
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        من
                                    </span>
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        09:00
                                    </span>
                                    <div className="h-3 w-px bg-slate-300 dark:bg-slate-700 my-1"></div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        إلى
                                    </span>
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        10:30
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                                            هندسة المتطلبات المتقدمة
                                        </h4>
                                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                                            SE301
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-lg">
                                                location_on
                                            </span>
                                            <span>مبنى C - قاعة 101</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-lg">
                                                person
                                            </span>
                                            <span>د. أحمد محمود</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center self-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all group">
                                <div className="flex flex-col items-center justify-center min-w-[4rem] text-center opacity-70 group-hover:opacity-100">
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        من
                                    </span>
                                    <span className="font-bold text-slate-800 dark:text-slate-200">
                                        12:00
                                    </span>
                                    <div className="h-3 w-px bg-slate-300 dark:bg-slate-700 my-1"></div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        إلى
                                    </span>
                                    <span className="font-bold text-slate-800 dark:text-slate-200">
                                        01:30
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                                            إدارة مشاريع البرمجيات
                                        </h4>
                                        <span className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                                            SE304
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-lg">
                                                location_on
                                            </span>
                                            <span>مبنى C - قاعة 205</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-lg">
                                                person
                                            </span>
                                            <span>أ.د. منى الشريف</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
                            <a
                                className="text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1"
                                href="#"
                            >
                                عرض الجدول الأسبوعي الكامل
                                <span className="material-symbols-outlined text-sm rtl:rotate-180">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                    </Card>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 px-1">
                        خدمات سريعة
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <Link href="/results" className="group w-full text-right">
                            <Card className="flex flex-col items-center justify-center p-4 h-full border-slate-200 dark:border-slate-800 group-hover:border-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    السجل الأكاديمي
                                </span>
                            </Card>
                        </Link>
                        <Link href="/fees" className="group w-full text-right">
                            <Card className="flex flex-col items-center justify-center p-4 h-full border-slate-200 dark:border-slate-800 group-hover:border-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    دفع الرسوم
                                </span>
                            </Card>
                        </Link>
                        <Link href="/exams" className="group w-full text-right">
                            <Card className="flex flex-col items-center justify-center p-4 h-full border-slate-200 dark:border-slate-800 group-hover:border-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">print</span>
                                </div>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    بطاقة الامتحان
                                </span>
                            </Card>
                        </Link>
                        <Link href="/services" className="group w-full text-right">
                            <Card className="flex flex-col items-center justify-center p-4 h-full border-slate-200 dark:border-slate-800 group-hover:border-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">support_agent</span>
                                </div>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    طلب مساعدة
                                </span>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className="space-y-6">
                    <Card noPadding className="overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-amber-500">
                                    notifications_active
                                </span>
                                تنبيهات هامة
                            </h3>
                            <button className="text-xs text-primary hover:underline">
                                الكل
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            <div
                                onClick={() => handleNotificationClick('تذكير: سداد الرسوم الدراسية')}
                                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                            >
                                <div className="flex gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                                            تذكير: سداد الرسوم الدراسية
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                                            يرجى العلم أن آخر موعد لسداد القسط الثاني هو الخميس القادم
                                            الموافق 20 أكتوبر.
                                        </p>
                                        <span className="text-[10px] text-slate-400 mt-2 block">
                                            منذ ساعتين
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => handleNotificationClick('تم رصد درجة الواجب الأول')}
                                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                            >
                                <div className="flex gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                                            تم رصد درجة الواجب الأول
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                            لمقرر الذكاء الاصطناعي (CS310). يمكنك مراجعة الدرجة الآن.
                                        </p>
                                        <span className="text-[10px] text-slate-400 mt-2 block">
                                            أمس
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => handleNotificationClick('ورشة عمل: الأمن السيبراني')}
                                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                            >
                                <div className="flex gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-slate-300 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                                            ورشة عمل: الأمن السيبراني
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                            ندعوكم لحضور ورشة عمل خاصة يوم الأربعاء في القاعة
                                            الرئيسية.
                                        </p>
                                        <span className="text-[10px] text-slate-400 mt-2 block">
                                            منذ 3 أيام
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg p-5 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10">
                            <span className="material-symbols-outlined text-9xl -mr-4 -mt-4">
                                support_agent
                            </span>
                        </div>
                        <h3 className="font-bold text-lg relative z-10">
                            المرشد الأكاديمي
                        </h3>
                        <div className="flex items-center gap-3 mt-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                                د
                            </div>
                            <div>
                                <p className="font-bold">د. خالد العمراني</p>
                                <p className="text-xs text-blue-100">
                                    ساعات مكتبية: أحد - خميس (10-12)
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4 relative z-10">
                            <button
                                onClick={() => handleAdvisorAction('حجز موعد')}
                                className="flex-1 bg-white text-primary text-xs font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                حجز موعد
                            </button>
                            <button
                                onClick={() => handleAdvisorAction('إرسال الرسالة')}
                                className="flex-1 bg-primary-light/50 text-white text-xs font-bold py-2 rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-1"
                            >
                                <span className="material-symbols-outlined text-sm">mail</span>
                                مراسلة
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
