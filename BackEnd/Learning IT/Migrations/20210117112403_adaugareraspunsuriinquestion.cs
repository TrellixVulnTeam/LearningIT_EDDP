using Microsoft.EntityFrameworkCore.Migrations;

namespace Learning_IT.Migrations
{
    public partial class adaugareraspunsuriinquestion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RaspunsA",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RaspunsB",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RaspunsC",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RaspunsCorect",
                table: "Questions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "RaspunsD",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RaspunsA",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RaspunsB",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RaspunsC",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RaspunsCorect",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RaspunsD",
                table: "Questions");
        }
    }
}
