"use client";

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ResultsPage() {
    const [selectedSemester, setSelectedSemester] = useState("الفصل الأول 2024-2025");

    const handleExportPDF = () => {
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
            loading: 'جاري تصدير النتائج...',
            success: 'تم تصدير ملف PDF بنجاح',
            error: 'حدث خطأ أثناء التصدير'
        });
    };

    const handlePrintRecord = () => {
        toast.info("جاري إعداد الطباعة...", {
            description: "سيتم فتح نافذة الطباعة للسجل الأكاديمي خلال لحظات."
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
                        <span className="text-primary font-medium">النتائج السابقة</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        سجل النتائج والدرجات
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                        استعراض سجل الدرجات للفصول الدراسية السابقة والمعدلات التراكمية.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent">grade</span>
                    <div>
                        <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                            المعدل العام
                        </p>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                            ممتاز (3.85)
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 w-full md:w-auto flex-1">
                    <div className="relative w-full md:w-72">
                        <label className="absolute -top-2.5 right-3 px-1 bg-white dark:bg-slate-900 text-xs font-semibold text-primary dark:text-blue-400">
                            اختر الفصل الدراسي
                        </label>
                        <select
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none font-medium cursor-pointer"
                            value={selectedSemester}
                            onChange={(e) => setSelectedSemester(e.target.value)}
                        >
                            <option>الفصل الأول 2024-2025</option>
                            <option>الفصل الثاني 2023-2024</option>
                            <option>الفصل الأول 2023-2024</option>
                        </select>
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            expand_more
                        </span>
                    </div>
                    <button className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                </div>
                <div className="flex items-center divide-x divide-x-reverse divide-slate-200 dark:divide-slate-700 w-full md:w-auto justify-center md:justify-end bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div className="px-4 text-center">
                        <p className="text-[11px] text-slate-500 mb-0.5">ساعات الفصل</p>
                        <p className="font-bold text-slate-800 dark:text-slate-200">15</p>
                    </div>
                    <div className="px-4 text-center">
                        <p className="text-[11px] text-slate-500 mb-0.5">النقاط الفصلية</p>
                        <p className="font-bold text-slate-800 dark:text-slate-200">
                            57.25
                        </p>
                    </div>
                    <div className="px-4 text-center">
                        <p className="text-[11px] text-slate-500 mb-0.5">المعدل الفصلي</p>
                        <p className="font-bold text-primary dark:text-blue-400 text-lg">
                            3.82
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-card border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <span className="material-symbols-outlined">history_edu</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                                نتائج المقررات
                            </h3>
                            <p className="text-xs text-slate-500">
                                حالة الفصل: <span className="text-green-600 font-bold">ناجح</span>
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleExportPDF}
                        className="text-sm text-slate-500 hover:text-primary flex items-center gap-1 transition-colors"
                    >
                        <span className="material-symbols-outlined text-lg">download</span>
                        <span>تصدير PDF</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4" scope="col">
                                    كود المقرر
                                </th>
                                <th className="px-6 py-4" scope="col">
                                    اسم المقرر
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    الساعات
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    الدرجة
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    التقدير
                                </th>
                                <th className="px-6 py-4 text-center" scope="col">
                                    النقاط
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    SE201
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    تصميم البرمجيات
                                </td>
                                <td className="px-6 py-4 text-center">3</td>
                                <td className="px-6 py-4 text-center font-bold">95</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold text-xs">
                                        A+
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    4.00
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    CS204
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    هياكل البيانات
                                </td>
                                <td className="px-6 py-4 text-center">3</td>
                                <td className="px-6 py-4 text-center font-bold">88</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 font-bold text-xs">
                                        A
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    3.75
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    MATH202
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    الرياضيات المتقطعة
                                </td>
                                <td className="px-6 py-4 text-center">3</td>
                                <td className="px-6 py-4 text-center font-bold">82</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs">
                                        B+
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    3.50
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    IS201
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    مقدمة في نظم المعلومات
                                </td>
                                <td className="px-6 py-4 text-center">2</td>
                                <td className="px-6 py-4 text-center font-bold">90</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 font-bold text-xs">
                                        A
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    3.75
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    ENG102
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    الكتابة التقنية
                                </td>
                                <td className="px-6 py-4 text-center">2</td>
                                <td className="px-6 py-4 text-center font-bold">96</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold text-xs">
                                        A+
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    4.00
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono font-semibold text-primary dark:text-blue-300">
                                    GS101
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                    مهارات القيادة
                                </td>
                                <td className="px-6 py-4 text-center">2</td>
                                <td className="px-6 py-4 text-center font-bold">98</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold text-xs">
                                        A+
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    4.00
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
                            <tr>
                                <td
                                    className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300"
                                    colSpan={2}
                                >
                                    المجموع الفصلي
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-800 dark:text-white">
                                    15
                                </td>
                                <td className="px-6 py-4 text-center"></td>
                                <td className="px-6 py-4 text-center"></td>
                                <td className="px-6 py-4 text-center font-bold text-primary dark:text-blue-400">
                                    57.25
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={handlePrintRecord}
                    className="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
                >
                    <span className="material-symbols-outlined">print</span>
                    طباعة السجل الأكاديمي
                </button>
            </div>
        </>
    );
}
