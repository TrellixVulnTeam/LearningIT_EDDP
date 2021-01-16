using Microsoft.EntityFrameworkCore.Migrations;

namespace Learning_IT.Migrations
{
    public partial class UpdateBadge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Badges_Users_UserId",
                table: "Badges");

            migrationBuilder.DropIndex(
                name: "IX_Badges_UserId",
                table: "Badges");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Badges");

            migrationBuilder.CreateTable(
                name: "UserBadge",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false),
                    BadgeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserBadge", x => new { x.BadgeId, x.UserID });
                    table.ForeignKey(
                        name: "FK_UserBadge_Badges_BadgeId",
                        column: x => x.BadgeId,
                        principalTable: "Badges",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserBadge_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserBadge_UserID",
                table: "UserBadge",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserBadge");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Badges",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Badges_UserId",
                table: "Badges",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Badges_Users_UserId",
                table: "Badges",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
