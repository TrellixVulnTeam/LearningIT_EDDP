using Microsoft.EntityFrameworkCore.Migrations;

namespace Learning_IT.Migrations
{
    public partial class adaugareExamenInCurs4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Exams_Chapters_ChapterId",
                table: "Exams");

            migrationBuilder.RenameColumn(
                name: "ChapterId",
                table: "Exams",
                newName: "CourseId");

            migrationBuilder.RenameIndex(
                name: "IX_Exams_ChapterId",
                table: "Exams",
                newName: "IX_Exams_CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Exams_Courses_CourseId",
                table: "Exams",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Exams_Courses_CourseId",
                table: "Exams");

            migrationBuilder.RenameColumn(
                name: "CourseId",
                table: "Exams",
                newName: "ChapterId");

            migrationBuilder.RenameIndex(
                name: "IX_Exams_CourseId",
                table: "Exams",
                newName: "IX_Exams_ChapterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Exams_Chapters_ChapterId",
                table: "Exams",
                column: "ChapterId",
                principalTable: "Chapters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
