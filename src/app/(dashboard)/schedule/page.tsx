"use client";

import React from 'react';
import { toast } from 'sonner';

export default function SchedulePage() {
    const handlePrint = () => {
        toast.success("تحضير الجدول للطباعة...", {
            description: "جاري إعداد نسخة صالحة للطباعة."
        });
    };

    const handleDownload = () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: 'جاري تنزيل الجدول...',
            success: 'تم تنزيل الجدول الدراسي بنجاح',
            error: 'حدث خطأ أثناء التنزيل'
        });
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                        <span>الرئيسية</span>
                        <span className="material-symbols-outlined text-xs rtl:rotate-180">
                            chevron_right
                        </span>
                        <span className="text-primary font-medium">الجدول الدراسي</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        الجدول الدراسي الأسبوعي
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                        عرض تفصيلي للمحاضرات وأوقاتها ومواقع القاعات.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrint}
                        className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">print</span>
                        <span className="hidden sm:inline">طباعة</span>
                    </button>
                    <button
                        onClick={handleDownload}
                        className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">download</span>
                        <span className="hidden sm:inline">تنزيل الجدول</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-lg p-6 text-white relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTAgMzhoNDB2MmgtNDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-blue-100 mb-2">
                                <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-bold backdrop-blur-sm">
                                    المحاضرة القادمة
                                </span>
                                <span className="text-sm font-medium">اليوم، 10:30 ص</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-1">
                                الذكاء الاصطناعي وتعلم الآلة
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 text-blue-50 text-sm mt-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-lg">
                                        location_on
                                    </span>
                                    <span>معامل الحاسب - معمل 3</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                    <span>د. كريم عادل</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-lg">code</span>
                                    <span>CS310</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center min-w-[100px]">
                            <span className="block text-xs text-blue-100 mb-1">
                                تبدأ خلال
                            </span>
                            <span className="block text-2xl font-bold font-mono tracking-wider">
                                45:00
                            </span>
                            <span className="block text-[10px] text-blue-100 mt-1">دقيقة</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-800 dark:text-slate-200">
                            معلومات الفصل
                        </h3>
                        <span className="material-symbols-outlined text-slate-400">
                            info
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                الفصل الدراسي
                            </span>
                            <span className="font-semibold text-slate-900 dark:text-white">
                                الثاني 2024-2025
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                الأسبوع الحالي
                            </span>
                            <span className="font-semibold text-slate-900 dark:text-white">
                                الأسبوع الثامن
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                حالة التسجيل
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                نشط
                            </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-2">
                            <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: "60%" }}
                            ></div>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 mt-1">
                            تم إنجاز 60% من الفصل الدراسي
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary dark:text-primary-light">
                            calendar_view_week
                        </span>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            الجدول الأسبوعي
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> محاضرة
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                            عملي/مختبر
                        </span>
                    </div>
                </div>
                <div className="p-6 overflow-x-auto">
                    <div className="min-w-[800px] grid grid-cols-5 gap-4">
                        <div className="flex flex-col gap-3">
                            <div className="text-center pb-2 border-b-2 border-primary/20 dark:border-primary/50 mb-2">
                                <span className="block font-bold text-slate-800 dark:text-slate-200">
                                    الأحد
                                </span>
                                <span className="text-xs text-slate-400">24 مايو</span>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 border-r-4 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                                        SE301
                                    </span>
                                    <span className="material-symbols-outlined text-[16px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        more_horiz
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                    هندسة المتطلبات المتقدمة
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>08:30 - 10:00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            room
                                        </span>
                                        <span>مبنى C - قاعة 101</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/10 border-r-4 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group mt-2">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-purple-900/50 px-1.5 py-0.5 rounded">
                                        CS310
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                    الذكاء الاصطناعي
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>10:30 - 12:00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            computer
                                        </span>
                                        <span>معامل الحاسب - 3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-center pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-2">
                                <span className="block font-bold text-slate-800 dark:text-slate-200">
                                    الاثنين
                                </span>
                                <span className="text-xs text-slate-400">25 مايو</span>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 border-r-4 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                                        SE304
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                    إدارة مشاريع البرمجيات
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>09:00 - 10:30</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            room
                                        </span>
                                        <span>مبنى C - قاعة 205</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-center pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-2">
                                <span className="block font-bold text-slate-800 dark:text-slate-200">
                                    الثلاثاء
                                </span>
                                <span className="text-xs text-slate-400">26 مايو</span>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 border-r-4 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-white dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                                        SE301
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                    هندسة المتطلبات المتقدمة
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>08:30 - 10:00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            room
                                        </span>
                                        <span>مبنى C - قاعة 101</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-center pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-2">
                                <span className="block font-bold text-slate-800 dark:text-slate-200">
                                    الأربعاء
                                </span>
                                <span className="text-xs text-slate-400">27 مايو</span>
                            </div>
                            <div className="p-3 bg-purple-50 dark:bg-purple-900/10 border-r-4 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-purple-900/50 px-1.5 py-0.5 rounded">
                                        CS310
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                    الذكاء الاصطناعي
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>10:30 - 12:00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            computer
                                        </span>
                                        <span>معامل الحاسب - 3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-center pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-2">
                                <span className="block font-bold text-slate-800 dark:text-slate-200">
                                    الخميس
                                </span>
                                <span className="text-xs text-slate-400">28 مايو</span>
                            </div>
                            <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border-r-4 border-amber-500 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group h-full flex flex-col justify-between min-h-[140px]">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-white dark:bg-amber-900/50 px-1.5 py-0.5 rounded">
                                            SE400
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight mb-2">
                                        مشروع التخرج (1)
                                    </h4>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            schedule
                                        </span>
                                        <span>09:00 - 12:00</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[14px]">
                                            groups
                                        </span>
                                        <span>قاعة المناقشات</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
